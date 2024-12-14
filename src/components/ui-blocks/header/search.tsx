import { Search } from "lucide-react";
import {  useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { SearchFormValues } from "@/utils/interfaces/interfaces";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "@/hooks/use-debounce";

const Searchbar: React.FC = () => {
const { t } = useTranslation();
const [searchParams, setSearchParams] = useSearchParams();
const { register, watch } = useForm<SearchFormValues>({
  defaultValues: {
    search: searchParams.get("search") || "", 
  },
});
const search = register("search");
const enteredText = watch("search")
const debouncedSearch = useDebounce(enteredText)
useEffect(() => {
  if (debouncedSearch.length > 0){
    setSearchParams({search: debouncedSearch})
  }else{
    setSearchParams({})
  }
}, [debouncedSearch, setSearchParams])

  return (
        <div className="relative">
          <Input
            {...search}
            placeholder={t("general.search")}
            className="pl-8"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
  );
};
export default Searchbar;
