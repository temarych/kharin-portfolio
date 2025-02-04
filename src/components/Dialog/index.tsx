"use client";

import { Fragment, ReactNode }                  from "react";
import { HiX }                                  from "react-icons/hi";
import { twMerge }                              from "tailwind-merge";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { IconButton }                           from "@components/IconButton";

export interface DialogProps {
  title            : string;
  isOpen           : boolean;
  onClose          : () => void;
  children?        : ReactNode;
  panelClassname?  : string;
  wrapperClassname?: string;
}

export const Dialog = ({ isOpen, onClose, title, children, panelClassname, wrapperClassname }: DialogProps) => {
  return (
    <Transition show={isOpen}>
      <HeadlessDialog open={isOpen} onClose={onClose} static className={twMerge(["fixed z-10 inset-0 p-4 flex flex-col items-center justify-center", wrapperClassname])}>
        <Transition.Child
          as        = {Fragment}
          enter     = "duration-200 transition"
          leave     = "duration-100 transition"
          enterFrom = "opacity-0"
          enterTo   = "opacity-1"
          leaveFrom = "opacity-1"
          leaveTo   = "opacity-0"
        >
          <div className="absolute inset-0 z-10 bg-black/40" />
        </Transition.Child>
        <Transition.Child
          as        = {Fragment}
          enter     = "duration-200 transition"
          leave     = "duration-100 transition"
          enterFrom = "opacity-0 scale-90"
          enterTo   = "opacity-1 scale-100"
          leaveFrom = "opacity-1 scale-100"
          leaveTo   = "opacity-0 scale-90"
        >
          <HeadlessDialog.Panel className={twMerge(["relative max-w-[30em] max-h-full w-full z-20 rounded-xl shadow bg-white overflow-hidden", panelClassname])}>
            <div className="p-4 border-b flex flex-row items-center justify-between">
              <h1 className="font-bold text-xl">{title}</h1>
              <IconButton onClick={onClose}>
                <HiX className="text-2xl" />
              </IconButton>
            </div>
            {children}
          </HeadlessDialog.Panel>
        </Transition.Child>
      </HeadlessDialog>
    </Transition>
  );
};