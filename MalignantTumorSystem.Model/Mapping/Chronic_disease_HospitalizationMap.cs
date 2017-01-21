using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_HospitalizationMap : EntityTypeConfiguration<Chronic_disease_Hospitalization>
    {
        public Chronic_disease_HospitalizationMap()
        {
            // Primary Key
            this.HasKey(t =>t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.nationality)
                .HasMaxLength(50);

            this.Property(t => t.nation)
                .HasMaxLength(50);

            this.Property(t => t.marriage)
                .HasMaxLength(50);

            this.Property(t => t.culture)
                .HasMaxLength(50);

            this.Property(t => t.blood_group)
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

            this.Property(t => t.contact_person)
                .HasMaxLength(50);

            this.Property(t => t.contact_phone)
                .HasMaxLength(50);

            this.Property(t => t.relationship)
                .HasMaxLength(50);

            this.Property(t => t.hospitalization_number)
                .HasMaxLength(50);
            this.Property(t => t.bed_number).HasMaxLength(50);

            this.Property(t => t.hospital)
                .HasMaxLength(50);

            this.Property(t => t.department)
                .HasMaxLength(50);

            this.Property(t => t.zs)
                .HasMaxLength(500);

            this.Property(t => t.xbs)
                .HasMaxLength(500);

            this.Property(t => t.jws)
                .HasMaxLength(500);

            this.Property(t => t.t)
                .HasMaxLength(50);

            this.Property(t => t.p)
                .HasMaxLength(50);

            this.Property(t => t.r)
                .HasMaxLength(50);

            this.Property(t => t.ssy1)
                .HasMaxLength(50);

            this.Property(t => t.szy1)
                .HasMaxLength(50);

            this.Property(t => t.ssy2)
                .HasMaxLength(50);

            this.Property(t => t.szy2)
                .HasMaxLength(50);

            this.Property(t => t.other)
                .HasMaxLength(150);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.sign)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Hospitalization");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.nationality).HasColumnName("nationality");
            this.Property(t => t.nation).HasColumnName("nation");
            this.Property(t => t.marriage).HasColumnName("marriage");
            this.Property(t => t.culture).HasColumnName("culture");
            this.Property(t => t.blood_group).HasColumnName("blood_group");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.permanent_address).HasColumnName("permanent_address");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.email).HasColumnName("email");
            this.Property(t => t.contact_person).HasColumnName("contact_person");
            this.Property(t => t.contact_phone).HasColumnName("contact_phone");
            this.Property(t => t.relationship).HasColumnName("relationship");
            this.Property(t => t.hospitalization_date).HasColumnName("hospitalization_date");
            this.Property(t => t.hospitalization_number).HasColumnName("hospitalization_number");
            this.Property(t => t.bed_number).HasColumnName("bed_number");
            this.Property(t => t.hospital).HasColumnName("hospital");
            this.Property(t => t.department).HasColumnName("department");
            this.Property(t => t.zs).HasColumnName("zs");
            this.Property(t => t.xbs).HasColumnName("xbs");
            this.Property(t => t.jws).HasColumnName("jws");
            this.Property(t => t.t).HasColumnName("t");
            this.Property(t => t.p).HasColumnName("p");
            this.Property(t => t.r).HasColumnName("r");
            this.Property(t => t.ssy1).HasColumnName("ssy1");
            this.Property(t => t.szy1).HasColumnName("szy1");
            this.Property(t => t.ssy2).HasColumnName("ssy2");
            this.Property(t => t.szy2).HasColumnName("szy2");
            this.Property(t => t.other).HasColumnName("other");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.sign).HasColumnName("sign");
        }
    }
}

