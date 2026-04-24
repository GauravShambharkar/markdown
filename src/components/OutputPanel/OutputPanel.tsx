import { MarkdownView } from "../MarkdownView/MarkdownView";
import { EmptyState } from "./EmptyState";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";

type Props = {
  markdown: string;
  loading: boolean;
  error: string | null;
};

export function OutputPanel({ markdown, loading, error }: Props) {
  return (
    <section className="flex flex-col h-full min-h-0">
      {loading ? (
        <div className="flex-1 border border-border bg-surface">
          <LoadingState />
        </div>
      ) : error ? (
        <div className="flex-1 border border-border bg-surface">
          <ErrorState message={error} />
        </div>
      ) : markdown ? (
        <MarkdownView markdown={markdown} />
      ) : (
        <div className="flex-1 border border-border bg-surface">
          <EmptyState />
        </div>
      )}
    </section>
  );
}
