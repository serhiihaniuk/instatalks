import { type Speaker } from "~/db";

export default async function Page({ searchParams }: { searchParams: any }) {
  if (searchParams.p !== "qqq323211a") return null;
  const res = await fetch("https://nailmoment.pl/api/speaker");
  const { speakers } = (await res.json()) as { speakers: Speaker[] };
  return (
    <div className="flex h-full min-h-[100vh] w-full flex-col items-center justify-start gap-8 rounded-xl p-8 text-white">
      {speakers.map((s) => {
        return (
          <div
            key={s.id}
            className="flex flex-col items-center justify-start gap-2 rounded-xl border border-white p-5 text-xl"
          >
            <div>{s.name}</div>
            <div>{s.email}</div>
            <div>{s.phone}</div>
          </div>
        );
      })}
    </div>
  );
}
