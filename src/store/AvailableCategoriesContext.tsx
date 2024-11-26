import { useLocalStorage } from "@mantine/hooks";
import { createContext, ReactNode } from "react";

type AvailableCategoriesContextProps = {
  children: ReactNode;
};

type AvailableCategories = {
  label: string;
  value: string;
  isused: string;
};

type CallBack = (prev: AvailableCategories[]) => AvailableCategories[];

type AvailableCategoriesContextType = {
  availableCategories: AvailableCategories[];
  setAvailableCategories: (callBack: CallBack) => void;
};

const AvailableCategoriesContext =
  createContext<AvailableCategoriesContextType>({
    availableCategories: [],
    setAvailableCategories: (callBack: CallBack) => { },
  });

export function AvailableCategoriesContextProvider({
  children,
}: AvailableCategoriesContextProps) {
  const [availableCategories, setAvailableCategories] = useLocalStorage<
    AvailableCategories[]
  >({
    key: "multiSelectCategories",
    defaultValue: [

      {
        label: "Travel",
        value: "Travel",
        isused: "false",
      },
      {
        label: "Food",
        value: "Food",
        isused: "false",
      },
      {
        label: "Stationery",
        value: "stationery",
        isused: "false",
      },
      {
        label: "Shopping",
        value: "Shopping",
        isused: "false",
      },
      {
        label: "Entertainment",
        value: "Entertainment",
        isused: "false",
      },
      {
        label: "Groceries",
        value: "Groceries",
        isused: "false",
      },
      { label: "Uncategorized", value: "Uncategorized", isused: "false" },

      {
        label: "Groceries",
        value: "Groceries",
        isused: "false",
      },
    ],
  });

  function setAvailableCategoriesHandler(callBack: CallBack) {
    setAvailableCategories(callBack);
  }

  const context = {
    availableCategories: availableCategories,
    setAvailableCategories: setAvailableCategoriesHandler,
  };

  return (
    <AvailableCategoriesContext.Provider value={context}>
      {children}
    </AvailableCategoriesContext.Provider>
  );
}

export default AvailableCategoriesContext;
