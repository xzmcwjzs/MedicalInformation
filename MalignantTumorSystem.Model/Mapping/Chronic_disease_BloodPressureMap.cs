using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_BloodPressureMap : EntityTypeConfiguration<Chronic_disease_BloodPressure>
    {
        public Chronic_disease_BloodPressureMap()
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

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.email)
                .HasMaxLength(50);

            this.Property(t => t.contact_personal)
                .HasMaxLength(50);

            this.Property(t => t.contact_phone)
                .HasMaxLength(50);

            this.Property(t => t.relationship)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_BloodPressure");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.permanent_address).HasColumnName("permanent_address");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.email).HasColumnName("email");
            this.Property(t => t.contact_personal).HasColumnName("contact_personal");
            this.Property(t => t.contact_phone).HasColumnName("contact_phone");
            this.Property(t => t.relationship).HasColumnName("relationship");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}

