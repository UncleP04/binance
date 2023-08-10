import React, { useState } from "react";
import Nav from "../navbars/nav";
import Link from "next/link";
import PopupModal from "../modal";

const Referral: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Nav />
      <section className="w-[100%] h-[100vh] bg-dark grid justify-center items-center overflow-y-hidden">
        <div className="md:px-[2%]">
          <h1 className="text-header hidden md:block font-semibold text-[1.5em] md:text-[2em] capitalize">
            Create Your Account
          </h1>
          <form className="py-4 w-[100%] lg:w-[400px] grid grid-cols-1 text-left">
            <div className="w-[100%] grid grid-cols-1 justify-start">
              <label
                htmlFor="referral"
                className="text-start float-left text-header pb-1"
              >
                Referral ID (Optional)
              </label>
              <input
                type="number"
                name="referral"
                id="referral"
                placeholder=""
                className="text-header bg-transparent rounded-md border border-text hover:border-primary focus:border-primary py-3 px-3 md:px-4"
              />
            </div>
            <div className="grid grid-cols-1 justify-start items-start">
              <p className="float-left text-start text-header py-4 text-[15px]">
                Agreements
              </p>
              <p className="float-left text-start text-header py-4 text-[15px]">
                By creating an account, I agree to Binance's Terms of Service
                and Privacy Policy.
              </p>
            </div>
            <div className="py-3 my-4 px-4 w-[100%] bg-primary text-dark rounded-md text-center">
              <Link href='' onClick={openModal}>Confirm</Link>
            </div>
          </form>
        </div>
        <PopupModal isOpen={isModalOpen} />
      </section>
    </div>
  );
};

export default Referral;
