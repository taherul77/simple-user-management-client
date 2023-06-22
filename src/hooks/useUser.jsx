import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const {data: user = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['user'],
    queryFn: async() => {
        const res = await fetch('http://localhost:5000/api/v1/user');
        return res.json();
    }
})

return {user, loading, refetch}
};

export default useUser;