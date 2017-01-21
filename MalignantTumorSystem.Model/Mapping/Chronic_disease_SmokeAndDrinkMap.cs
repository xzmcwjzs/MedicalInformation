using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_SmokeAndDrinkMap : EntityTypeConfiguration<Chronic_disease_SmokeAndDrink>
    {
        public Chronic_disease_SmokeAndDrinkMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            this.Property(t => t.permanent_address)
                .HasMaxLength(50);

            this.Property(t => t.post_code)
                .HasMaxLength(50);

            this.Property(t => t.smoking)
                .HasMaxLength(50);

            this.Property(t => t.smoking_begin_year)
                .HasMaxLength(50);

            this.Property(t => t.smoking_daily_amount)
                .HasMaxLength(50);

            this.Property(t => t.smoking_age)
                .HasMaxLength(50);

            this.Property(t => t.smoked)
                .HasMaxLength(50);

            this.Property(t => t.smoked_begin_year)
                .HasMaxLength(50);

            this.Property(t => t.smoked_smoking_again)
                .HasMaxLength(50);

            this.Property(t => t.smoked_long_time)
                .HasMaxLength(50);

            this.Property(t => t.smoked_intent)
                .HasMaxLength(50);

            this.Property(t => t.smoked_second_hand)
                .HasMaxLength(50);

            this.Property(t => t.smoke_never)
                .HasMaxLength(50);

            this.Property(t => t.drinking)
                .HasMaxLength(50);

            this.Property(t => t.drinking_begin_year)
                .HasMaxLength(50);

            this.Property(t => t.drinking_age)
                .HasMaxLength(50);

            this.Property(t => t.drunk_begin_year)
                .HasMaxLength(50);

            this.Property(t => t.drunk_drinking_again)
                .HasMaxLength(50);

            this.Property(t => t.drunk_long_time)
                .HasMaxLength(50);

            this.Property(t => t.drink_never)
                .HasMaxLength(50);

            this.Property(t => t.drinking_spirit_frequency)
                .HasMaxLength(50);

            this.Property(t => t.drinking_beer_frequency)
                .HasMaxLength(50);

            this.Property(t => t.drinking_red_frequency)
                .HasMaxLength(50);

            this.Property(t => t.drinking_yellow_frequency)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_wine1)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_frequency)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_degree1)
                .HasMaxLength(50);

            this.Property(t => t.drinking_spirit_amount)
                .HasMaxLength(50);

            this.Property(t => t.drinking_spirit_equivalent)
                .HasMaxLength(50);

            this.Property(t => t.drinking_beer_amount)
                .HasMaxLength(50);

            this.Property(t => t.drinking_beer_equivalent)
                .HasMaxLength(50);

            this.Property(t => t.drinking_red_amount)
                .HasMaxLength(50);

            this.Property(t => t.drinking_red_equivalent)
                .HasMaxLength(50);

            this.Property(t => t.drinking_yellow_amount)
                .HasMaxLength(50);

            this.Property(t => t.drinking_yellow_equivalent)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_wine2)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_degree2)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_amount)
                .HasMaxLength(50);

            this.Property(t => t.drinking_other_equivalent)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_SmokeAndDrink");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.permanent_address).HasColumnName("permanent_address");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.smoking).HasColumnName("smoking");
            this.Property(t => t.smoking_begin_year).HasColumnName("smoking_begin_year");
            this.Property(t => t.smoking_daily_amount).HasColumnName("smoking_daily_amount");
            this.Property(t => t.smoking_age).HasColumnName("smoking_age");
            this.Property(t => t.smoked).HasColumnName("smoked");
            this.Property(t => t.smoked_begin_year).HasColumnName("smoked_begin_year");
            this.Property(t => t.smoked_smoking_again).HasColumnName("smoked_smoking_again");
            this.Property(t => t.smoked_long_time).HasColumnName("smoked_long_time");
            this.Property(t => t.smoked_intent).HasColumnName("smoked_intent");
            this.Property(t => t.smoked_second_hand).HasColumnName("smoked_second_hand");
            this.Property(t => t.smoke_never).HasColumnName("smoke_never");
            this.Property(t => t.drinking).HasColumnName("drinking");
            this.Property(t => t.drinking_begin_year).HasColumnName("drinking_begin_year");
            this.Property(t => t.drinking_age).HasColumnName("drinking_age");
            this.Property(t => t.drunk_begin_year).HasColumnName("drunk_begin_year");
            this.Property(t => t.drunk_drinking_again).HasColumnName("drunk_drinking_again");
            this.Property(t => t.drunk_long_time).HasColumnName("drunk_long_time");
            this.Property(t => t.drink_never).HasColumnName("drink_never");
            this.Property(t => t.drinking_spirit_frequency).HasColumnName("drinking_spirit_frequency");
            this.Property(t => t.drinking_beer_frequency).HasColumnName("drinking_beer_frequency");
            this.Property(t => t.drinking_red_frequency).HasColumnName("drinking_red_frequency");
            this.Property(t => t.drinking_yellow_frequency).HasColumnName("drinking_yellow_frequency");
            this.Property(t => t.drinking_other_wine1).HasColumnName("drinking_other_wine1");
            this.Property(t => t.drinking_other_frequency).HasColumnName("drinking_other_frequency");
            this.Property(t => t.drinking_other_degree1).HasColumnName("drinking_other_degree1");
            this.Property(t => t.drinking_spirit_amount).HasColumnName("drinking_spirit_amount");
            this.Property(t => t.drinking_spirit_equivalent).HasColumnName("drinking_spirit_equivalent");
            this.Property(t => t.drinking_beer_amount).HasColumnName("drinking_beer_amount");
            this.Property(t => t.drinking_beer_equivalent).HasColumnName("drinking_beer_equivalent");
            this.Property(t => t.drinking_red_amount).HasColumnName("drinking_red_amount");
            this.Property(t => t.drinking_red_equivalent).HasColumnName("drinking_red_equivalent");
            this.Property(t => t.drinking_yellow_amount).HasColumnName("drinking_yellow_amount");
            this.Property(t => t.drinking_yellow_equivalent).HasColumnName("drinking_yellow_equivalent");
            this.Property(t => t.drinking_other_wine2).HasColumnName("drinking_other_wine2");
            this.Property(t => t.drinking_other_degree2).HasColumnName("drinking_other_degree2");
            this.Property(t => t.drinking_other_amount).HasColumnName("drinking_other_amount");
            this.Property(t => t.drinking_other_equivalent).HasColumnName("drinking_other_equivalent");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.type).HasColumnName("type");
        }
    }
}

