type SpecTableProps = {
  rows: Array<[string, string]>;
};

export function SpecTable({ rows }: SpecTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-ink/10 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-ink text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Item</th>
            <th className="px-4 py-3 font-bold">Specification</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([item, spec]) => (
            <tr key={item} className="border-t border-ink/10 odd:bg-field/60">
              <td className="px-4 py-3 font-semibold text-ink">{item}</td>
              <td className="px-4 py-3 text-soil/80">{spec}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
