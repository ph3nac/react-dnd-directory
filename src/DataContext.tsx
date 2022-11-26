import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DataType } from './contentType';
import { DataMock } from './DataMock';

type DataContextType = [
  data: DataType | undefined,
  setData: Dispatch<SetStateAction<DataType | undefined>>,
];

type WrapperProps = {
  children: ReactNode | undefined;
};

export const DataContext = createContext<DataContextType>([{}, () => {}]);

export const DataContextWrapper: FC<WrapperProps> = ({ children }) => {
  const [data, setData] = useState<DataType>();
  useEffect(() => {
    setData(DataMock);
  }, []);

  const DataContextValue = useMemo<DataContextType>(
    () => [data, setData],
    [data],
  );
  return (
    <DataContext.Provider value={DataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
