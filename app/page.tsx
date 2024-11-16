import { LoginForm } from "@/components/forms/LoginForm";
import Image from "next/image";

// import { PatientForm } from "@/components/forms/PatientForm";

const Home = () => {
  

  return (
    <div className="flex h-screen max-h-screen">
    
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] ">
          <Image
            src="/assets/icons/logo-full-2.png"
            height={10000}
            width={10000}
            alt="patient"
            className="mx-auto mb-14 h-32 w-fit align-middle"
          />

          {/* <PatientForm /> */}
          <LoginForm />

          <div className="text-14-regular mt-20 flex justify-center">
            <p className="justify-items-end text-dark-600 xl:text-left">
            Indiana Bones Dog Adventures Corp. © 2021. All rights reserved.
            </p>
            {/* <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link> */}
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/login-page.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
