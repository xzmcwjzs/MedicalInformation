using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_SmokeAndDrink
    {
        public string id { get; set; }
        public string resident_id { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string permanent_home_commitcode { get; set; }
        public string permanent_address { get; set; }
        public string post_code { get; set; }
        public string smoking { get; set; }
        public string smoking_begin_year { get; set; }
        public string smoking_daily_amount { get; set; }
        public string smoking_age { get; set; }
        public string smoked { get; set; }
        public string smoked_begin_year { get; set; }
        public string smoked_smoking_again { get; set; }
        public string smoked_long_time { get; set; }
        public string smoked_intent { get; set; }
        public string smoked_second_hand { get; set; }
        public string smoke_never { get; set; }
        public string drinking { get; set; }
        public string drinking_begin_year { get; set; }
        public string drinking_age { get; set; }
        public string drunk_begin_year { get; set; }
        public string drunk_drinking_again { get; set; }
        public string drunk_long_time { get; set; }
        public string drink_never { get; set; }
        public string drinking_spirit_frequency { get; set; }
        public string drinking_beer_frequency { get; set; }
        public string drinking_red_frequency { get; set; }
        public string drinking_yellow_frequency { get; set; }
        public string drinking_other_wine1 { get; set; }
        public string drinking_other_frequency { get; set; }
        public string drinking_other_degree1 { get; set; }
        public string drinking_spirit_amount { get; set; }
        public string drinking_spirit_equivalent { get; set; }
        public string drinking_beer_amount { get; set; }
        public string drinking_beer_equivalent { get; set; }
        public string drinking_red_amount { get; set; }
        public string drinking_red_equivalent { get; set; }
        public string drinking_yellow_amount { get; set; }
        public string drinking_yellow_equivalent { get; set; }
        public string drinking_other_wine2 { get; set; }
        public string drinking_other_degree2 { get; set; }
        public string drinking_other_amount { get; set; }
        public string drinking_other_equivalent { get; set; }
        public string worker_user_name { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string community_code { get; set; }
        public string type { get; set; }
    }
}
