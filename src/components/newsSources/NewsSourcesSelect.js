import React from "react";

export default function NewsSourcesSelect({ sourcesList }) {
  if (!sourcesList) return null;
  return (
    <div className="news-sources">
      <select className="sources-list">
        {sourcesList.map((source) => (
          <option key={source.id} className="source-item">
            {source.name}
          </option>
        ))}
      </select>
    </div>
  );
}
