import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUp, Clapperboard, Hammer, ImageIcon, MessageCircle } from "../lib/icons";

const modes = [
  { id: "chat", label: "Ask", icon: MessageCircle },
  { id: "image", label: "Picture", icon: ImageIcon },
  { id: "video", label: "Video", icon: Clapperboard },
  { id: "build", label: "Build", icon: Hammer },
];

export function ChatPage() {
  const [params] = useSearchParams();
  const initial = params.get("q") || "";
  const mode = params.get("mode") || "chat";
  const [text, setText] = useState(initial);
  const [messages, setMessages] = useState<{ role: "you" | "creora"; text: string }[]>(
    initial ? [{ role: "you", text: initial }, { role: "creora", text: replyFor(initial, mode) }] : [],
  );

  const placeholder = useMemo(() => {
    if (mode === "image") return "Describe a picture…";
    if (mode === "video") return "Describe a five second clip…";
    if (mode === "build") return "Describe an app to build…";
    return "Ask Creora anything…";
  }, [mode]);

  function send(e?: FormEvent) {
    e?.preventDefault();
    const next = text.trim();
    if (!next) return;
    setMessages((m) => [...m, { role: "you", text: next }, { role: "creora", text: replyFor(next, mode) }]);
    setText("");
  }

  return (
    <div className="mx-auto flex h-[calc(100dvh-56px)] max-w-3xl flex-col px-4 pb-6">
      {messages.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <img src="/logo.png" alt="" width={48} height={48} className="mb-5" />
          <h1 className="text-[28px] font-medium tracking-tight">What do you want to make?</h1>
          <p className="mt-2 max-w-md text-[14px] text-foreground-secondary">
            Uncensored chat, pictures and video, or an app from a sentence. Three free uses a day, no account needed.
          </p>
        </div>
      ) : (
        <div className="flex-1 space-y-6 overflow-y-auto py-6">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "you" ? "ml-auto max-w-[85%] rounded-2xl bg-white/8 px-4 py-3" : "max-w-[85%]"}>
              <p className="mb-1 text-[11px] tracking-[0.12em] text-foreground-muted uppercase">{m.role === "you" ? "You" : "Creora"}</p>
              <p className="text-[15px] leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={send} className="rounded-[26px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          rows={2}
          placeholder={placeholder}
          className="block w-full resize-none bg-transparent px-2 pt-1 text-[15px] outline-none placeholder:text-foreground-muted"
        />
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {modes.map(({ id, label, icon: Icon }) => (
              <span
                key={id}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] ${mode === id ? "bg-link/20 text-white" : "text-foreground-muted"}`}
              >
                <Icon className="size-3.5 text-link" />
                {label}
              </span>
            ))}
          </div>
          <button type="submit" disabled={!text.trim()} className={`flex size-9 items-center justify-center rounded-full ${text.trim() ? "bg-link text-white" : "bg-white/8 text-foreground-muted"}`}>
            <ArrowUp className="size-4" />
          </button>
        </div>
      </form>
      <p className="mt-2 text-center text-[12px] text-foreground-muted">Free to try: 3 messages a day.</p>
    </div>
  );
}

function replyFor(q: string, mode: string) {
  if (mode === "image") return `A 1024×1024 picture from “${q}” would be made here, without the filter, and yours to download.`;
  if (mode === "video") return `A five second clip from “${q}” would be made here while you keep talking.`;
  if (mode === "build") return `The builder would open a project from “${q}”, write the files, give it a database if you need one, and run it live beside the code.`;
  return `Creora would answer that here. This clone keeps the conversation on your device and does not send it anywhere.`;
}
