const TableCustom = ({
  headers = [],
  data = [],
  renderActions,
  onRowClick,
}) => {
  return (
    <div className="overflow-auto rounded border border-gray-300">
      <table className="min-w-full table-auto text-xs text-left">
        <thead className="bg-gray-100 text-gray-700 text-center ">
          <tr>
            <th className="px-3 py-2 ">STT</th>
            {headers.map((header, index) => (
              <th key={index} className="px-3 py-2 border border-gray-300">
                {header}
              </th>
            ))}
            {renderActions && (
              <th className="px-3 py-2 border border-gray-300 w-[120px] ">
                Thao tác
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length + 1 + (renderActions ? 1 : 0)}
                className="text-center py-4 text-gray-500"
              >
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 text-center border-b"
                onClick={() => onRowClick?.(rowIndex, row)}
              >
                <td className="px-3 py-2 border border-gray-300">
                  {rowIndex + 1}
                </td>
                {headers.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-3 py-2 border border-gray-300"
                  >
                    {row[colIndex]}
                  </td>
                ))}
                {renderActions && (
                  <td className="px-3 py-2 border border-gray-300">
                    {renderActions(rowIndex, row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
