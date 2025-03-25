import {FavoritesPage} from "../components/FavoritesPage/FavoritesPage"
import { PrivateRoute } from "../components/PrivateRoute";

export default function Page() {
  return (
    <PrivateRoute>
    <FavoritesPage />
    </PrivateRoute>
  )
}