import Link from 'next/link';

export default function ErrorPage() {
  return (
    <section className="py-72">
      <div className="contianer mx-auto ">
        <h3 className="text-center mb-4">Something went wrong!</h3>
      </div>
      <Link href="/">
        <button className="btn btn-accent mx-auto">Back to home page</button>
      </Link>
    </section>
  );
}
