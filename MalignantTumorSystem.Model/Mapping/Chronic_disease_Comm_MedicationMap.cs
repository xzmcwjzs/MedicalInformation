using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_MedicationMap :EntityTypeConfiguration<Chronic_disease_Comm_Medication>
    {
        public Chronic_disease_Comm_MedicationMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.names)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.age)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.address)
                .HasMaxLength(50);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.name1)
                .HasMaxLength(50);

            this.Property(t => t.dosage1)
                .HasMaxLength(50);

            this.Property(t => t.usage1)
                .HasMaxLength(50);

            this.Property(t => t.manu_batch1)
                .HasMaxLength(50);

            this.Property(t => t.name2)
                .HasMaxLength(50);

            this.Property(t => t.dosage2)
                .HasMaxLength(50);

            this.Property(t => t.usage2)
                .HasMaxLength(50);

            this.Property(t => t.manu_batch2)
                .HasMaxLength(50);

            this.Property(t => t.name3)
                .HasMaxLength(50);

            this.Property(t => t.dosage3)
                .HasMaxLength(50);

            this.Property(t => t.usage3)
                .HasMaxLength(50);

            this.Property(t => t.manu_batch3)
                .HasMaxLength(50);

            this.Property(t => t.name4)
                .HasMaxLength(50);

            this.Property(t => t.dosage4)
                .HasMaxLength(50);

            this.Property(t => t.usage4)
                .HasMaxLength(50);

            this.Property(t => t.manu_batch4)
                .HasMaxLength(50);

            this.Property(t => t.name5)
                .HasMaxLength(50);

            this.Property(t => t.dosage5)
                .HasMaxLength(50);

            this.Property(t => t.usage5)
                .HasMaxLength(50);

            this.Property(t => t.manu_batch5)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.worker)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_Medication");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.names).HasColumnName("names");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.data1).HasColumnName("data1");
            this.Property(t => t.name1).HasColumnName("name1");
            this.Property(t => t.dosage1).HasColumnName("dosage1");
            this.Property(t => t.usage1).HasColumnName("usage1");
            this.Property(t => t.manu_batch1).HasColumnName("manu_batch1");
            this.Property(t => t.data2).HasColumnName("data2");
            this.Property(t => t.name2).HasColumnName("name2");
            this.Property(t => t.dosage2).HasColumnName("dosage2");
            this.Property(t => t.usage2).HasColumnName("usage2");
            this.Property(t => t.manu_batch2).HasColumnName("manu_batch2");
            this.Property(t => t.data3).HasColumnName("data3");
            this.Property(t => t.name3).HasColumnName("name3");
            this.Property(t => t.dosage3).HasColumnName("dosage3");
            this.Property(t => t.usage3).HasColumnName("usage3");
            this.Property(t => t.manu_batch3).HasColumnName("manu_batch3");
            this.Property(t => t.data4).HasColumnName("data4");
            this.Property(t => t.name4).HasColumnName("name4");
            this.Property(t => t.dosage4).HasColumnName("dosage4");
            this.Property(t => t.usage4).HasColumnName("usage4");
            this.Property(t => t.manu_batch4).HasColumnName("manu_batch4");
            this.Property(t => t.data5).HasColumnName("data5");
            this.Property(t => t.name5).HasColumnName("name5");
            this.Property(t => t.dosage5).HasColumnName("dosage5");
            this.Property(t => t.usage5).HasColumnName("usage5");
            this.Property(t => t.manu_batch5).HasColumnName("manu_batch5");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.worker).HasColumnName("worker");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
        }
    }
}

