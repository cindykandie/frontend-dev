import LetterC from "@/components/letterC";
import LetterK from "@/components/letterK";
import Layout from "@/app/layout";
import MyTitle from "@/components/myTitle";

export default function MainPage() {
    return (
      <Layout>
        <div>
          <LetterC />
          <LetterK />
          <MyTitle />
        </div>
      </Layout>
        
    );
  }