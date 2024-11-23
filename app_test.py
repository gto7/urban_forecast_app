import streamlit as st
import pydeck as pdk
import geopandas as gpd

# Configuration de la page
st.set_page_config(page_title="Carte avec Polygones et Fond Personnalisé", layout="wide")

# Chargement des données GeoPandas
@st.cache_data
def load_geopandas_data(file_path):
    """Charge un fichier Parquet en tant que GeoDataFrame avec GeoPandas."""
    try:
        gdf = gpd.read_parquet(file_path)
        return gdf
    except FileNotFoundError:
        st.error(f"Fichier introuvable : {file_path}")
        return None
    except Exception as e:
        st.error(f"Erreur lors du chargement du fichier : {e}")
        return None

# Chemin vers le fichier
file_path = "app/data/ex_file_geopandas.parquet"
gdf = load_geopandas_data(file_path)

# Vérification des données chargées
if gdf is None or gdf.empty or "geometry" not in gdf.columns:
    st.error("Le fichier ne contient pas de géométrie valide ou est vide.")
    st.stop()

# Nettoyage des géométries
gdf = gdf[~gdf.geometry.is_empty]
gdf = gdf[gdf.geometry.is_valid]

# Projeter les géométries si elles sont en CRS géographique
if gdf.crs is not None and gdf.crs.is_geographic:
    gdf = gdf.to_crs(epsg=3857)

# Calcul du centroid global
centroid = gdf.geometry.centroid.union_all().centroid

# Vérifier le type de centroid
st.write(f"Type de géométrie du centroid : {centroid.geom_type}")

# Interface utilisateur pour sélectionner une colonne
st.sidebar.header("Options des données")
st.sidebar.subheader("Choix du fond de carte")
basemap_options = {
    "Clair": "mapbox://styles/mapbox/light-v10",
    "Sombre": "mapbox://styles/mapbox/dark-v10",
    "Satellite": "mapbox://

