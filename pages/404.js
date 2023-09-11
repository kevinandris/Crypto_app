import Layout from "@/components/Layout";
import Link from "next/link";
const NotFound = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="--center-all">
            <h1>Oops!!! Looks like you are lost</h1>
            <p>It appears this page does not exist, please go back home.</p>
            <br />
            <Link href="/">
              <button className="--btn btn-primary">Back To Home</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
