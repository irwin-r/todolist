import React, { FormEvent, useState } from "react";

import { HeaderProps } from "./types";

function Header({ disabled = false, onAdd }: HeaderProps): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const { description } = event.currentTarget;

    setIsSubmitting(true);

    try {
      await onAdd(description.value);

      // clear values on successful add
      description.value = "";
    } catch (error) {
      // TODO: properly surface error
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="w-full">
      <form className="flex py-8 space-x-4" onSubmit={onSubmit}>
        <input
          disabled={disabled}
          aria-label="Description of task to be added"
          className="border-2 h-12 px-4 flex-auto rounded-md focus:outline-none focus:ring-1 focus:border-blue-300"
          id="description"
          name="description"
          placeholder="Buy some groceries..."
          required
          type="text"
        />
        {/* priority buttons */}
        <button
          className="bg-green-500 h-12 px-4 text-white font-semibold rounded-md focus:outline-none hover:bg-green-600"
          disabled={disabled || isSubmitting}
          type="submit"
        >
          add
        </button>
      </form>
    </header>
  );
}

export default Header;
