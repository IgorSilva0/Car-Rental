
import Header from "@/components/Header";
import Fleet from "@/components/Fleet";

const Index = async () => {


  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Header />
      <Fleet/>
    </div>
  );
}

export default Index