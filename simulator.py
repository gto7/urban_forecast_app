

import pandas as pd
import pyarrow.parquet as pq


#initial_state_db = './data/ex_file_geopandas.parquet'
initial_state_db = './data/fake_initial_db.csv'




def simulate_density_strict(initial_state_db):
    annual_increase_rate = 0.017
    #df = pq.read_table(source=initial_state_db).to_pandas()
    df = pd.read_csv(initial_state_db)
    total_increase_rate = ((annual_increase_rate + 1) ** 26) - 1
    df["pop2050"] = (total_increase_rate + 1) *  df["pop2024"]
    df["density2050"] = df["pop2050"] / df["surface"]
    #df['max_density'] = df['max_population_capacity'] / df['surface']
    
    
    kpi = pd.DataFrame()
    kpi['max_density'] = df['density2050'].max()
    kpi['zone_max_density'] = df[df['density2050'] == df['density2050'].max()]['ID']

    return print(df.head(), kpi.head())

#simulation_result.final_state
#simulation_result.kpi


simulate_density_strict(initial_state_db)