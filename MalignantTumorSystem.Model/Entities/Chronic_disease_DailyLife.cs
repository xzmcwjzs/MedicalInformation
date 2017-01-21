using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_DailyLife
    {
        public string id { get; set; }
        public string resident_id { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string permanent_home_commitcode { get; set; }
        public string permanent_address { get; set; }
        public string living_getup { get; set; }
        public string living_noonbreak { get; set; }
        public string living_sleep { get; set; }
        public string diet_three_meals { get; set; }
        public string diet_staple_food { get; set; }
        public string diet_eating { get; set; }
        public string diet_eating_other { get; set; }
        public string diet_oil_salt { get; set; }
        public string diet_oil_salt_other { get; set; }
        public string diet_salt_amount { get; set; }
        public string diet_oil_amount { get; set; }
        public string diet_sugar_amount { get; set; }
        public string diet_drinkwater_morning { get; set; }
        public string diet_drink_amount { get; set; }
        public string diet_drink_interval { get; set; }
        public string diet_drinks { get; set; }
        public string diet_drinks_other { get; set; }
        public string diet_fruits { get; set; }
        public string diet_vegetables { get; set; }
        public string diet_grain { get; set; }
        public string diet_grain_other { get; set; }
        public string diet_aquatic_products { get; set; }
        public string diet_aquatic_products_other { get; set; }
        public string diet_livestock_poultry_eggs { get; set; }
        public string diet_livestock_poultry_eggs_other { get; set; }
        public string diet_health_products { get; set; }
        public string diet_health_products_other { get; set; }
        public string diet_hobby { get; set; }
        public string diet_hobby_other { get; set; }
        public string type { get; set; }
        public string worker_user_name { get; set; }
        public string community_code { get; set; }
        public string post_code { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
    }
}

