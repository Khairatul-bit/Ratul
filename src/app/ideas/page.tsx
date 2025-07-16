import IdeasContent from '@/components/IdeasContent';

interface PageProps {
  searchParams: {
    page?: string;
    perPage?: string;
    sort?: string;
  };
}

export default function IdeasPage({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const perPage = parseInt(searchParams.perPage || '10', 10);
  const sort = searchParams.sort || '-published_at';

  return (
    <IdeasContent 
      page={page}
      perPage={perPage}
      sort={sort}
    />
  );
}
