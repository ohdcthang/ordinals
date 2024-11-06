"use client";

import { OrdinalsEngine } from "@/ordinals-sdk/src";
import { useState } from "react";

export default function Home() {
  const [inscriptionId, setInscriptionId] = useState('')
  const [inscriptionResult, setInscriptionResult] = useState('')

  const engine = new OrdinalsEngine();

  const getInscription = async () => {
      const data = await engine.getHistory({address:'bc1qgw7f850c7zgvhrhdvv6utlwnr273rfr7xgn0dv', pagination:{
        limit: 10,
        page: 1
      }})
      console.log("🚀 ~ getInscription ~ data:", data)
      setInscriptionResult(JSON.stringify(data))
  }

  return (
    <div className=" items-center justify-items-center min-h-screen p-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold">COIN98 ORDINALS SDK</h1>

      {/* GET INSCRIPTION INFO */}
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-4 justify-between w-full">
            <p className="font-semibold">GET INSCRIPTION INFORMATION : </p>
            <p className="font-semibold">RESULT : </p>
          </div>
        </div>
        <div className="flex justify-between w-full pt-4">
          <div className="flex gap-4 justify-between w-full text-black">
            <textarea onChange={(e) => setInscriptionId(e?.target?.value)} className="min-h-[100px] w-full" />
            <textarea value={inscriptionResult} readOnly className="min-h-[100px] w-full" />
          </div>
        </div>
        <button onClick={getInscription} className="text-white px-4 py-2 border-white border mt-2 rounded-xl hover:opacity-90">
          GET INCRIPTION
        </button>
      </div>
    </div>
  );
}
