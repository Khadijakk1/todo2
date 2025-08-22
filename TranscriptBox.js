export default function TranscriptBox({ title, text, onSpeak, showButton }) {
  return (
    <div className="flex-1 p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="min-h-[120px] p-2 bg-gray-50 rounded">{text || "..."}</div>
      {showButton && text && (
        <button
          onClick={() => onSpeak(text)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Speak
        </button>
      )}
    </div>
  );
}
