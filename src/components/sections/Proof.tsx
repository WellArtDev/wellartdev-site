export function Proof() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Biar nggak cuma janji</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">
          Bagian ini nanti kita isi dengan case study + angka nyata. Untuk sekarang, aku siapin strukturnya dulu biar kamu tinggal
          masukin data saat ada.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["+X proyek selesai", "Y% klien repeat", "Z hari average delivery"].map((x) => (
            <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">{x}</p>
              <p className="mt-1 text-sm text-white/60">(placeholder — isi setelah ada data)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
