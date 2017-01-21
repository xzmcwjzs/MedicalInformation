using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_PhysicalExerciseMap : EntityTypeConfiguration<Chronic_disease_PhysicalExercise>
    {
        public Chronic_disease_PhysicalExerciseMap()
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

            this.Property(t => t.physical_1)
                .HasMaxLength(50);

            this.Property(t => t.physical_1_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_1_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_2)
                .HasMaxLength(50);

            this.Property(t => t.physical_2_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_2_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_2_speed)
                .HasMaxLength(50);

            this.Property(t => t.physical_3)
                .HasMaxLength(50);

            this.Property(t => t.physical_3_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_3_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_3_speed)
                .HasMaxLength(50);

            this.Property(t => t.physical_4)
                .HasMaxLength(50);

            this.Property(t => t.physical_4_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_4_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_5)
                .HasMaxLength(50);

            this.Property(t => t.physical_5_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_5_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_6)
                .HasMaxLength(50);

            this.Property(t => t.physical_6_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_6_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_7)
                .HasMaxLength(50);

            this.Property(t => t.physical_7_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_7_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_8)
                .HasMaxLength(50);

            this.Property(t => t.physical_8_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_8_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_9)
                .HasMaxLength(50);

            this.Property(t => t.physical_9_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_9_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_10)
                .HasMaxLength(50);

            this.Property(t => t.physical_10_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_10_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_11)
                .HasMaxLength(50);

            this.Property(t => t.physical_11_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_11_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_12)
                .HasMaxLength(50);

            this.Property(t => t.physical_12_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_12_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_13)
                .HasMaxLength(50);

            this.Property(t => t.physical_13_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_13_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_14)
                .HasMaxLength(50);

            this.Property(t => t.physical_14_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_14_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_15)
                .HasMaxLength(50);

            this.Property(t => t.physical_15_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_15_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_16)
                .HasMaxLength(50);

            this.Property(t => t.physical_16_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_16_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_17)
                .HasMaxLength(50);

            this.Property(t => t.physical_17_week)
                .HasMaxLength(50);

            this.Property(t => t.physical_17_time)
                .HasMaxLength(50);

            this.Property(t => t.physical_other)
                .HasMaxLength(50);

            this.Property(t => t.physical_other_frequency)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_PhysicalExercise");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.permanent_address).HasColumnName("permanent_address");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.physical_1).HasColumnName("physical_1");
            this.Property(t => t.physical_1_week).HasColumnName("physical_1_week");
            this.Property(t => t.physical_1_time).HasColumnName("physical_1_time");
            this.Property(t => t.physical_2).HasColumnName("physical_2");
            this.Property(t => t.physical_2_week).HasColumnName("physical_2_week");
            this.Property(t => t.physical_2_time).HasColumnName("physical_2_time");
            this.Property(t => t.physical_2_speed).HasColumnName("physical_2_speed");
            this.Property(t => t.physical_3).HasColumnName("physical_3");
            this.Property(t => t.physical_3_week).HasColumnName("physical_3_week");
            this.Property(t => t.physical_3_time).HasColumnName("physical_3_time");
            this.Property(t => t.physical_3_speed).HasColumnName("physical_3_speed");
            this.Property(t => t.physical_4).HasColumnName("physical_4");
            this.Property(t => t.physical_4_week).HasColumnName("physical_4_week");
            this.Property(t => t.physical_4_time).HasColumnName("physical_4_time");
            this.Property(t => t.physical_5).HasColumnName("physical_5");
            this.Property(t => t.physical_5_week).HasColumnName("physical_5_week");
            this.Property(t => t.physical_5_time).HasColumnName("physical_5_time");
            this.Property(t => t.physical_6).HasColumnName("physical_6");
            this.Property(t => t.physical_6_week).HasColumnName("physical_6_week");
            this.Property(t => t.physical_6_time).HasColumnName("physical_6_time");
            this.Property(t => t.physical_7).HasColumnName("physical_7");
            this.Property(t => t.physical_7_week).HasColumnName("physical_7_week");
            this.Property(t => t.physical_7_time).HasColumnName("physical_7_time");
            this.Property(t => t.physical_8).HasColumnName("physical_8");
            this.Property(t => t.physical_8_week).HasColumnName("physical_8_week");
            this.Property(t => t.physical_8_time).HasColumnName("physical_8_time");
            this.Property(t => t.physical_9).HasColumnName("physical_9");
            this.Property(t => t.physical_9_week).HasColumnName("physical_9_week");
            this.Property(t => t.physical_9_time).HasColumnName("physical_9_time");
            this.Property(t => t.physical_10).HasColumnName("physical_10");
            this.Property(t => t.physical_10_week).HasColumnName("physical_10_week");
            this.Property(t => t.physical_10_time).HasColumnName("physical_10_time");
            this.Property(t => t.physical_11).HasColumnName("physical_11");
            this.Property(t => t.physical_11_week).HasColumnName("physical_11_week");
            this.Property(t => t.physical_11_time).HasColumnName("physical_11_time");
            this.Property(t => t.physical_12).HasColumnName("physical_12");
            this.Property(t => t.physical_12_week).HasColumnName("physical_12_week");
            this.Property(t => t.physical_12_time).HasColumnName("physical_12_time");
            this.Property(t => t.physical_13).HasColumnName("physical_13");
            this.Property(t => t.physical_13_week).HasColumnName("physical_13_week");
            this.Property(t => t.physical_13_time).HasColumnName("physical_13_time");
            this.Property(t => t.physical_14).HasColumnName("physical_14");
            this.Property(t => t.physical_14_week).HasColumnName("physical_14_week");
            this.Property(t => t.physical_14_time).HasColumnName("physical_14_time");
            this.Property(t => t.physical_15).HasColumnName("physical_15");
            this.Property(t => t.physical_15_week).HasColumnName("physical_15_week");
            this.Property(t => t.physical_15_time).HasColumnName("physical_15_time");
            this.Property(t => t.physical_16).HasColumnName("physical_16");
            this.Property(t => t.physical_16_week).HasColumnName("physical_16_week");
            this.Property(t => t.physical_16_time).HasColumnName("physical_16_time");
            this.Property(t => t.physical_17).HasColumnName("physical_17");
            this.Property(t => t.physical_17_week).HasColumnName("physical_17_week");
            this.Property(t => t.physical_17_time).HasColumnName("physical_17_time");
            this.Property(t => t.physical_other).HasColumnName("physical_other");
            this.Property(t => t.physical_other_frequency).HasColumnName("physical_other_frequency");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}

