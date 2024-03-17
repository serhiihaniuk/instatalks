"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
const defaultError = {
  name: false,
  email: false,
  phone: false,
};

const SpeakerDialog = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState<{ name: boolean; email: boolean; phone: boolean }>(
    defaultError,
  );

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const value = e.target.value as string;
    setFormError({ ...formError, name: false });
    setName(value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const value: string = (e.target as HTMLInputElement).value as string;
    setFormError({ ...formError, email: false });
    setEmail(value);
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const value = e.target.value as string;

    // Check if the value is a number and can start with plus
    const isNumber = /^\+?[0-9]*$/.test(value);
    if (!isNumber && value) return;
    setFormError({ ...formError, phone: false });

    setPhone(value);
  };

  const submitForm = async () => {
    const isValidName = name.trim().length > 0;
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      Boolean(email.trim().length);
    const isValidPhone = /^\+?[0-9]*$/.test(phone) && Boolean(phone.trim().length);

    console.log(isValidName, isValidEmail, isValidPhone, phone);
    if (!isValidName || !isValidEmail || !isValidPhone) {
      setFormError({
        name: !isValidName,
        email: !isValidEmail,
        phone: !isValidPhone,
      });
      return;
    }

    try {
      const res = await fetch("/api/speaker", {
        method: "POST",
        body: JSON.stringify({ name, email, phone }),
      });
      // @ts-ignore
      const b: Record<string, any> = await res.json();
      if (b?.message === "200") {
        setSuccess(true);
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
          setName("");
          setEmail("");
          setPhone("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending form", error);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="border-0 bg-none text-xl text-white underline hover:text-pink-500">
          Стати партнером
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[55555555] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            {success ? "Дякуємо" : "Стати партнером"}
          </Dialog.Title>
          {!success && (
            <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
              Заповніть форму і ми зв&apos;яжемося з вами
            </Dialog.Description>
          )}
          {!success && (
            <>
              {" "}
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                  Ім&apos;я
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                  value={name}
                  onChange={onNameChange}
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                  e-mail
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="email"
                  type="email"
                  value={email}
                  onChange={onEmailChange}
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                  Телефон
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={onPhoneChange}
                />
              </fieldset>
              <div className="text-center text-red-500">
                {formError.name && <div>Будь ласка введіть ім&apos;я</div>}
                {formError.email && <div>Будь ласка введіть корректний email</div>}
                {formError.phone && <div>Будь ласка введіть номер телефонy</div>}
              </div>{" "}
            </>
          )}
          {success && (
            <div className="mx-auto flex h-[150px] items-center justify-center gap-5 text-xl text-green-800">
              <CheckIcon height={25} width={25} />{" "}
              <span className="w-[200px]">Ми зв&apos;яжемося з вами найближчим часом</span>
            </div>
          )}
          {!success && (
            <div className="mt-[25px] flex justify-end">
              <button
                onClick={submitForm}
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Надіслати
              </button>
            </div>
          )}

          {success && (
            <Dialog.Close asChild>
              <div className="mt-[25px] flex justify-end">
                <button
                  onClick={submitForm}
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Замкнути
                </button>
              </div>
            </Dialog.Close>
          )}

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SpeakerDialog;
