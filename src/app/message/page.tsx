"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SiteBackground from "@/components/SiteBackground";
import { mockMessages } from "@/data/messages";
import { contactMethods } from "@/data/site-data";

const COOLDOWN_SECONDS = 18;

type FormState = {
  name: string;
  contact: string;
  content: string;
};

export default function MessagePage() {
  const { locale } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: "", contact: "", content: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [cooldown, setCooldown] = useState(0);
  const [banner, setBanner] = useState("欢迎留下你的足迹。你可以分享对作品的看法、提出合作建议，或者只是简单的问候。");

  const visibleContacts = useMemo(() => contactMethods.filter((item) => item.label !== "学校"), []);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "请先留下一个称呼。";
    }

    if (!form.content.trim()) {
      nextErrors.content = "留言内容不能为空。";
    } else if (form.content.trim().length < 5) {
      nextErrors.content = "多写几个字吧，让信息更完整。";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function startCooldown() {
    setCooldown(COOLDOWN_SECONDS);
    const timer = window.setInterval(() => {
      setCooldown((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cooldown > 0) {
      setBanner(`请稍等 ${cooldown} 秒后再试，避免频繁提交。`);
      return;
    }

    if (!validate()) {
      setBanner("表单里还有一些必填项没有完成，我已经帮你标出来了。");
      return;
    }

    setBanner("留言已收到，我会尽快查看。");
    startCooldown();
    setForm({ name: "", contact: "", content: "" });
  }

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-white/10">
      <div className="bg-subtle-glow" />
      <Navbar />
      <PageHero
        kicker="Message Requisition"
        title="在线留言 Message"
        description="如果你想交流作品、分享建议，或只是路过留下几句话，都可以写在这里。这个页面是网站的轻交流入口。"
        stats={["Communication", "Message Wall", "Contact"]}
      />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-px bg-white/10 border border-white/10 px-8 pb-10 lg:grid-cols-[1.2fr_0.8fr] mb-32">
        <form className="bg-[#080809] p-12 lg:p-16 transition-colors hover:bg-white/[0.02]" onSubmit={handleSubmit} noValidate>
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-8 bg-white/20"></span>
            <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase">Message Form</p>
          </div>
          <h2 className="text-4xl font-serif text-white/90">留下你的留言</h2>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/40">
            可以写下建议、问题、合作意向，或者一句简单的问候。
          </p>

          <div className="mt-8 border-l-2 border-white/30 bg-white/5 p-4 text-xs leading-relaxed text-white/60 font-light">
            {banner}
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <label className="block mono text-[10px] text-white/40 mb-3 tracking-widest uppercase">Name / 称呼</label>
              <input
                value={form.name}
                onChange={(event) => setField("name", event.target.value)}
                className={`w-full bg-[#080809] border px-4 py-4 text-sm outline-none transition-colors focus:bg-white/5 ${errors.name ? "border-red-500/50" : "border-white/10 focus:border-white/30"}`}
                placeholder="例如：一位路过的朋友"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="mt-3 text-xs text-red-400/80">{errors.name}</p> : null}
            </div>

            <div>
              <label className="block mono text-[10px] text-white/40 mb-3 tracking-widest uppercase">Contact / 联系方式</label>
              <input
                value={form.contact}
                onChange={(event) => setField("contact", event.target.value)}
                className={`w-full bg-[#080809] border px-4 py-4 text-sm outline-none transition-colors focus:bg-white/5 ${errors.contact ? "border-red-500/50" : "border-white/10 focus:border-white/30"}`}
                placeholder="邮箱 / 微信 / 电话，仅用于必要时的回复（选填）"
                aria-invalid={Boolean(errors.contact)}
              />
              {errors.contact ? <p className="mt-3 text-xs text-red-400/80">{errors.contact}</p> : null}
            </div>

            <div>
              <label className="block mono text-[10px] text-white/40 mb-3 tracking-widest uppercase">Content / 留言内容</label>
              <textarea
                value={form.content}
                onChange={(event) => setField("content", event.target.value)}
                className={`min-h-[200px] w-full bg-[#080809] border px-4 py-4 text-sm outline-none transition-colors focus:bg-white/5 ${errors.content ? "border-red-500/50" : "border-white/10 focus:border-white/30"}`}
                placeholder="想对我说些什么？"
                aria-invalid={Boolean(errors.content)}
              />
              <div className="mt-3 flex items-center justify-between gap-4 mono text-[9px] text-white/30">
                <span>建议不要填写敏感隐私信息。</span>
                <span>{form.content.trim().length} WORDS</span>
              </div>
              {errors.content ? <p className="mt-3 text-xs text-red-400/80">{errors.content}</p> : null}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/10">
            <button className="btn-primary min-w-[200px]" type="submit" disabled={cooldown > 0}>
              {cooldown > 0
                ? locale === "zh"
                  ? `冷却中 ${cooldown}s`
                  : `WAIT ${cooldown}s`
                : locale === "zh"
                  ? "发送留言"
                  : "SUBMIT MESSAGE"}
            </button>
            <p className="mono text-[9px] text-white/20 uppercase tracking-widest">
              SECURE SUBMISSION
            </p>
          </div>
        </form>

        <div className="flex flex-col gap-px bg-white/10">
          <div className="bg-[#080809] p-12 lg:p-16 h-full transition-colors hover:bg-white/[0.02]">
            <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-8">Direct Contact</p>
            <h2 className="text-2xl font-serif text-white/90 mb-8">直接联系我</h2>
            <div className="space-y-6">
              {visibleContacts.map((item) => (
                <div key={item.label} className="border border-white/10 p-6 hover:bg-white/5 transition-colors">
                  <p className="mono text-[9px] uppercase tracking-widest text-white/30 mb-3">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="block text-sm text-white/90 hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/90">{item.value}</p>
                  )}
                </div>
              ))}
              <p className="border-l border-white/20 pl-4 text-xs leading-relaxed text-white/40 mt-8">
                如果沟通内容较多或有项目合作意向，直接通过邮箱联系效率会更高。留言墙适合简短的交流或浏览后的即时反馈。
              </p>
            </div>
          </div>

          <div className="bg-[#080809] p-12 lg:p-16 transition-colors hover:bg-white/[0.02]">
            <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-8">Privacy Policy</p>
            <h2 className="text-2xl font-serif text-white/90 mb-8">隐私说明</h2>
            <div className="space-y-4">
              {[
                "留下的联系方式不会在留言墙公开展示。",
                "请勿在留言内容中包含敏感的个人隐私。",
                "部分不适宜公开的留言内容我将选择隐藏或删除。",
                "感谢理解与尊重空间的沟通氛围。",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-4 text-xs leading-relaxed text-white/50">
                  <span className="mono text-[9px] text-white/20 mt-0.5 border border-white/10 px-1.5">0{i + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-8 pb-32">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8">
          <div>
            <p className="mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-4">Message Wall</p>
            <h2 className="text-4xl font-serif text-white/90">留言墙</h2>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-white/40">
            公开的留言展示区。这里记录着访客的足迹和关于设计的探讨。
          </p>
        </div>
        {mockMessages.length > 0 ? (
          <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2 xl:grid-cols-3">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className="bg-[#080809] p-10 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-col gap-8 h-full">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <p className="font-serif text-white/80">{message.name}</p>
                    <p className="mono text-[9px] text-white/30 uppercase">{message.meta ?? message.createdAt}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50 flex-1 font-light">{message.content}</p>
                  <div className="mono text-[9px] text-white/20 mt-4 uppercase">Status: Public</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-white/20 p-20 text-center">
            <h3 className="text-2xl font-serif text-white/80">还没有留言</h3>
            <p className="mt-4 mono text-[10px] text-white/40 uppercase tracking-widest">Be the first to leave a mark</p>
          </div>
        )}
      </section>
      <Footer theme="dark" />
    </main>
  );
}
