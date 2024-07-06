export default function SessionSwitch() {
  return (
    <section className="w-full flex justify-center pt-5">
      <div className="bg-secondary flex items-center rounded-md p-1">
        <button type="button" className="py-2 px-4 rounded-md">
          Preview Session
        </button>
        <button type="button" className="py-2 px-4 rounded-md">
          Generate Session
        </button>
      </div>
    </section>
  );
}
