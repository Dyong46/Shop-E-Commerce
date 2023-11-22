
const bottomHeader = [
  'Áo khoác 1k Freeship',
  'Săn Sale iPhone 14 Pro Max 1k',
  'Áo 0đ',
  'Vợt cầu lông 10kg Căn Sẵn',
  'Gấu Bông 1k',
  'Dép 0đ',
  'Váy 1k Freeship',
  'Set đồ',
  'Son Kem Lì  Romand',
]

const BottomHeader = () => {
  return (
    <div className="flex flex-row mr-5">
      {bottomHeader.map(item => (
        <button className="pt-1 me-3 text-xs hover:text-gray-200" key={item}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default BottomHeader;
