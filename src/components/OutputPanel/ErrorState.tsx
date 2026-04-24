export function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 px-6 text-center">
      <div className="h-8 w-8 border border-danger text-danger flex items-center justify-center">
        !
      </div>
      <p className="text-sm text-danger max-w-md break-words">{message}</p>
    </div>
  );
}
