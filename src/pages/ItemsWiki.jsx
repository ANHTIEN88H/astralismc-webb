import { useMemo, useState } from "react";

const RARITY_OPTIONS = [
  { key: "common", label: "Thường", nameClass: "text-slate-200" },
  { key: "rare", label: "Hiếm", nameClass: "text-sky-300" },
  { key: "epic", label: "Cực Phẩm (Epic)", nameClass: "text-fuchsia-300" },
  {
    key: "legendary",
    label: "Huyền Thoại (Legendary)",
    nameClass: "text-amber-300",
  },
  { key: "mythic", label: "Thần Thoại (Mythic)", nameClass: "text-rose-300" },
];

const TYPE_OPTIONS = [
  { key: "sword", label: "Kiếm" },
  { key: "staff", label: "Trượng" },
  { key: "dagger", label: "Dao găm" },
  { key: "armor", label: "Giáp" },
];

const ITEM_DATABASE = [
  {
    id: "aether-holyblade",
    name: "Thánh Kiếm Aether",
    rarity: "legendary",
    category: "Vũ khí",
    type: "sword",
    subtype: "Kiếm dài",
    level: 50,
    stats: [
      { text: "+120 Sát thương ánh sáng", tone: "positive" },
      { text: "+35% Tỷ lệ chí mạng", tone: "positive" },
      { text: "-10 Tốc độ đánh", tone: "negative" },
    ],
    lore: '"Lưỡi kiếm được rèn từ mảnh thiên thạch rơi xuống thánh điện Astralis."',
  },
  {
    id: "void-archscepter",
    name: "Quyền Trượng Hư Vô",
    rarity: "mythic",
    category: "Vũ khí",
    type: "staff",
    subtype: "Trượng cổ ngữ",
    level: 62,
    stats: [
      { text: "+180 Sát thương hư không", tone: "positive" },
      { text: "+55 Năng lượng tối đa", tone: "positive" },
      { text: "-18 Kháng vật lý", tone: "negative" },
    ],
    lore: '"Mỗi nhịp rung của trượng đều vọng ra tiếng thì thầm từ khe nứt không gian."',
  },
  {
    id: "traitor-mask",
    name: "Mặt Nạ Kẻ Phản Bội",
    rarity: "epic",
    category: "Giáp",
    type: "armor",
    subtype: "Mũ giáp bóng đêm",
    level: 45,
    stats: [
      { text: "+48 Né tránh", tone: "positive" },
      { text: "+22 Kháng bóng tối", tone: "positive" },
      { text: "-12 Danh vọng phe ánh sáng", tone: "negative" },
    ],
    lore: '"Ẩn thân khỏi ánh mắt kẻ thù, nhưng cũng xóa mờ danh tính của chủ nhân."',
  },
  {
    id: "ashenfang-dagger",
    name: "Dao Găm Nanh Tro Tàn",
    rarity: "rare",
    category: "Vũ khí",
    type: "dagger",
    subtype: "Dao găm độc ảnh",
    level: 38,
    stats: [
      { text: "+72 Sát thương độc", tone: "positive" },
      { text: "+30% Tốc độ ra đòn", tone: "positive" },
      { text: "-8 Phòng thủ", tone: "negative" },
    ],
    lore: '"Khi lưỡi dao lóe sáng, bóng kẻ địch đã nằm lại trong tro bụi."',
  },
  {
    id: "wardens-ironbark",
    name: "Giáp Vệ Binh Thiết Mộc",
    rarity: "common",
    category: "Giáp",
    type: "armor",
    subtype: "Giáp thân nặng",
    level: 30,
    stats: [
      { text: "+95 Giáp vật lý", tone: "positive" },
      { text: "+40 Kháng choáng", tone: "positive" },
      { text: "-12 Tốc độ di chuyển", tone: "negative" },
    ],
    lore: '"Bộ giáp từng bảo vệ cổng thành cuối cùng trong cuộc chiến Hắc Nhật."',
  },
];

const RARITY_STYLES = {
  common: {
    borderClass: "border-slate-700",
    glowClass: "from-slate-500/0 via-slate-400/60 to-slate-500/0",
    nameClass: "text-slate-200",
  },
  rare: {
    borderClass: "border-sky-900",
    glowClass: "from-sky-500/0 via-sky-400/60 to-sky-500/0",
    nameClass: "text-sky-300",
  },
  epic: {
    borderClass: "border-purple-900",
    glowClass: "from-purple-500/0 via-fuchsia-400/60 to-purple-500/0",
    nameClass: "text-fuchsia-300",
  },
  legendary: {
    borderClass: "border-amber-900",
    glowClass: "from-amber-500/0 via-amber-300/70 to-amber-500/0",
    nameClass: "text-amber-300",
  },
  mythic: {
    borderClass: "border-rose-900",
    glowClass: "from-rose-500/0 via-rose-300/70 to-rose-500/0",
    nameClass: "text-rose-300",
  },
};

const toggleFilter = (currentFilters, value) =>
  currentFilters.includes(value)
    ? currentFilters.filter((item) => item !== value)
    : [...currentFilters, value];

export default function ItemsWiki() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarities, setSelectedRarities] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const filteredItems = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return ITEM_DATABASE.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(keyword);
      const matchesRarity =
        selectedRarities.length === 0 || selectedRarities.includes(item.rarity);
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(item.type);

      return matchesSearch && matchesRarity && matchesType;
    });
  }, [searchTerm, selectedRarities, selectedTypes]);

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
          Wiki • Item Database
        </p>
        <h1 className="text-3xl font-black uppercase tracking-wider text-slate-100 md:text-4xl minecraft-text-shadow">
          Từ điển vật phẩm MMORPG
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">
          Tra cứu vũ khí và giáp hiếm của AstralisMC. Kết hợp bộ lọc theo độ
          hiếm, loại trang bị và tìm kiếm tên để săn đúng món đồ cho hành trình
          Dark Fantasy của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="h-fit space-y-6 rounded-2xl border border-purple-900/60 bg-black/70 p-5 backdrop-blur-sm">
          <div className="space-y-2">
            <label
              htmlFor="item-search"
              className="text-xs font-bold uppercase tracking-wider text-slate-300"
            >
              Search by name
            </label>
            <input
              id="item-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="VD: Thánh Kiếm Aether"
              className="w-full rounded-md border border-slate-700 bg-black/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Độ hiếm
            </h2>
            <div className="space-y-2">
              {RARITY_OPTIONS.map((rarity) => {
                const checked = selectedRarities.includes(rarity.key);

                return (
                  <label
                    key={rarity.key}
                    className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-800 bg-black/50 px-2.5 py-2 text-sm text-slate-200 transition hover:border-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setSelectedRarities((prev) =>
                          toggleFilter(prev, rarity.key),
                        )
                      }
                      className="h-4 w-4 rounded border-slate-500 bg-black text-cyan-400 focus:ring-cyan-400"
                    />
                    <span className={rarity.nameClass}>{rarity.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Loại vật phẩm
            </h2>
            <div className="space-y-2">
              {TYPE_OPTIONS.map((typeOption) => {
                const checked = selectedTypes.includes(typeOption.key);

                return (
                  <label
                    key={typeOption.key}
                    className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-800 bg-black/50 px-2.5 py-2 text-sm text-slate-200 transition hover:border-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setSelectedTypes((prev) =>
                          toggleFilter(prev, typeOption.key),
                        )
                      }
                      className="h-4 w-4 rounded border-slate-500 bg-black text-cyan-400 focus:ring-cyan-400"
                    />
                    <span>{typeOption.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedRarities([]);
              setSelectedTypes([]);
            }}
            className="w-full rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Xóa bộ lọc
          </button>
        </aside>

        <div className="space-y-3">
          <p className="text-sm text-slate-300">
            Hiển thị{" "}
            <span className="font-bold text-cyan-300">
              {filteredItems.length}
            </span>{" "}
            / {ITEM_DATABASE.length} vật phẩm
          </p>

          {filteredItems.length === 0 ? (
            <div className="rounded-xl border border-purple-900/60 bg-black/70 p-6 text-center text-sm text-slate-300">
              Không tìm thấy vật phẩm phù hợp với bộ lọc hiện tại.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => {
                const style = RARITY_STYLES[item.rarity];

                return (
                  <article
                    key={item.id}
                    className={`relative overflow-hidden rounded-lg border ${style.borderClass} bg-black/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.glowClass}`}
                    />

                    <h3
                      className={`text-lg font-bold ${style.nameClass} minecraft-text-shadow`}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {item.category} - {item.subtype} (Level {item.level})
                    </p>

                    <div className="my-3 h-px bg-slate-700/60" />

                    <ul className="space-y-1 text-sm leading-relaxed">
                      {item.stats.map((stat) => (
                        <li
                          key={`${item.id}-${stat.text}`}
                          className={
                            stat.tone === "negative"
                              ? "text-red-400"
                              : "text-emerald-400"
                          }
                        >
                          {stat.text}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 border-t border-slate-800/80 pt-3 text-sm italic text-gray-400">
                      {item.lore}
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
