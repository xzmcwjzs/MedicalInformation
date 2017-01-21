using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_DailyLifeMap : EntityTypeConfiguration<Chronic_disease_DailyLife>
    {
        public Chronic_disease_DailyLifeMap()
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

            this.Property(t => t.living_getup)
                .HasMaxLength(50);

            this.Property(t => t.living_noonbreak)
                .HasMaxLength(50);

            this.Property(t => t.living_sleep)
                .HasMaxLength(50);

            this.Property(t => t.diet_three_meals)
                .HasMaxLength(50);

            this.Property(t => t.diet_staple_food)
                .HasMaxLength(50);

            this.Property(t => t.diet_eating)
                .HasMaxLength(50);

            this.Property(t => t.diet_eating_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_oil_salt)
                .HasMaxLength(50);

            this.Property(t => t.diet_oil_salt_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_salt_amount)
                .HasMaxLength(50);

            this.Property(t => t.diet_oil_amount)
                .HasMaxLength(50);

            this.Property(t => t.diet_sugar_amount)
                .HasMaxLength(50);

            this.Property(t => t.diet_drinkwater_morning)
                .HasMaxLength(50);

            this.Property(t => t.diet_drink_amount)
                .HasMaxLength(50);

            this.Property(t => t.diet_drink_interval)
                .HasMaxLength(50);

            this.Property(t => t.diet_drinks)
                .HasMaxLength(50);

            this.Property(t => t.diet_drinks_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_fruits)
                .HasMaxLength(50);

            this.Property(t => t.diet_vegetables)
                .HasMaxLength(50);

            this.Property(t => t.diet_grain)
                .HasMaxLength(50);

            this.Property(t => t.diet_grain_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_aquatic_products)
                .HasMaxLength(50);

            this.Property(t => t.diet_aquatic_products_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_livestock_poultry_eggs)
                .HasMaxLength(50);

            this.Property(t => t.diet_livestock_poultry_eggs_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_health_products)
                .HasMaxLength(50);

            this.Property(t => t.diet_health_products_other)
                .HasMaxLength(50);

            this.Property(t => t.diet_hobby)
                .HasMaxLength(50);

            this.Property(t => t.diet_hobby_other)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.post_code)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_DailyLife");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.permanent_address).HasColumnName("permanent_address");
            this.Property(t => t.living_getup).HasColumnName("living_getup");
            this.Property(t => t.living_noonbreak).HasColumnName("living_noonbreak");
            this.Property(t => t.living_sleep).HasColumnName("living_sleep");
            this.Property(t => t.diet_three_meals).HasColumnName("diet_three_meals");
            this.Property(t => t.diet_staple_food).HasColumnName("diet_staple_food");
            this.Property(t => t.diet_eating).HasColumnName("diet_eating");
            this.Property(t => t.diet_eating_other).HasColumnName("diet_eating_other");
            this.Property(t => t.diet_oil_salt).HasColumnName("diet_oil_salt");
            this.Property(t => t.diet_oil_salt_other).HasColumnName("diet_oil_salt_other");
            this.Property(t => t.diet_salt_amount).HasColumnName("diet_salt_amount");
            this.Property(t => t.diet_oil_amount).HasColumnName("diet_oil_amount");
            this.Property(t => t.diet_sugar_amount).HasColumnName("diet_sugar_amount");
            this.Property(t => t.diet_drinkwater_morning).HasColumnName("diet_drinkwater_morning");
            this.Property(t => t.diet_drink_amount).HasColumnName("diet_drink_amount");
            this.Property(t => t.diet_drink_interval).HasColumnName("diet_drink_interval");
            this.Property(t => t.diet_drinks).HasColumnName("diet_drinks");
            this.Property(t => t.diet_drinks_other).HasColumnName("diet_drinks_other");
            this.Property(t => t.diet_fruits).HasColumnName("diet_fruits");
            this.Property(t => t.diet_vegetables).HasColumnName("diet_vegetables");
            this.Property(t => t.diet_grain).HasColumnName("diet_grain");
            this.Property(t => t.diet_grain_other).HasColumnName("diet_grain_other");
            this.Property(t => t.diet_aquatic_products).HasColumnName("diet_aquatic_products");
            this.Property(t => t.diet_aquatic_products_other).HasColumnName("diet_aquatic_products_other");
            this.Property(t => t.diet_livestock_poultry_eggs).HasColumnName("diet_livestock_poultry_eggs");
            this.Property(t => t.diet_livestock_poultry_eggs_other).HasColumnName("diet_livestock_poultry_eggs_other");
            this.Property(t => t.diet_health_products).HasColumnName("diet_health_products");
            this.Property(t => t.diet_health_products_other).HasColumnName("diet_health_products_other");
            this.Property(t => t.diet_hobby).HasColumnName("diet_hobby");
            this.Property(t => t.diet_hobby_other).HasColumnName("diet_hobby_other");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}

