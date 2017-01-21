using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Diabetes_familyMap : EntityTypeConfiguration<Chronic_disease_Diabetes_family>
    {
        public Chronic_disease_Diabetes_familyMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.host_name)
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

            this.Property(t => t.spouse_name)
                .HasMaxLength(50);

            this.Property(t => t.spouse_id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.spouse_phone)
                .HasMaxLength(50);

            this.Property(t => t.spouse_birth_date);

            this.Property(t => t.hostFather_name)
                .HasMaxLength(50);

            this.Property(t => t.hostFather_id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.hostFather_phone)
                .HasMaxLength(50);

            this.Property(t => t.hostFather_birth_date);

            this.Property(t => t.hostMother_name)
                .HasMaxLength(50);

            this.Property(t => t.hostMother_id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.hostMother_phone)
                .HasMaxLength(50);

            this.Property(t => t.hostMother_birth_date);

            this.Property(t => t.relation)
                .HasMaxLength(50);

            this.Property(t => t.relation_name)
                .HasMaxLength(50);

            this.Property(t => t.relation_id_card)
                .HasMaxLength(50);

            this.Property(t => t.relation_phone)
                .HasMaxLength(50);

            this.Property(t => t.relation_birth_date);

            this.Property(t => t.chronic_disease_type)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.perment_community_code)
                .HasMaxLength(50);

            this.Property(t => t.post_code)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Diabetes_family");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.host_name).HasColumnName("host_name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.spouse_name).HasColumnName("spouse_name");
            this.Property(t => t.spouse_id_card_number).HasColumnName("spouse_id_card_number");
            this.Property(t => t.spouse_phone).HasColumnName("spouse_phone");
            this.Property(t => t.spouse_birth_date).HasColumnName("spouse_birth_date");
            this.Property(t => t.hostFather_name).HasColumnName("hostFather_name");
            this.Property(t => t.hostFather_id_card_number).HasColumnName("hostFather_id_card_number");
            this.Property(t => t.hostFather_phone).HasColumnName("hostFather_phone");
            this.Property(t => t.hostFather_birth_date).HasColumnName("hostFather_birth_date");
            this.Property(t => t.hostMother_name).HasColumnName("hostMother_name");
            this.Property(t => t.hostMother_id_card_number).HasColumnName("hostMother_id_card_number");
            this.Property(t => t.hostMother_phone).HasColumnName("hostMother_phone");
            this.Property(t => t.hostMother_birth_date).HasColumnName("hostMother_birth_date");
            this.Property(t => t.relation).HasColumnName("relation");
            this.Property(t => t.relation_name).HasColumnName("relation_name");
            this.Property(t => t.relation_id_card).HasColumnName("relation_id_card");
            this.Property(t => t.relation_phone).HasColumnName("relation_phone");
            this.Property(t => t.relation_birth_date).HasColumnName("relation_birth_date");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.chronic_disease_type).HasColumnName("chronic_disease_type");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.perment_community_code).HasColumnName("perment_community_code");
            this.Property(t => t.post_code).HasColumnName("post_code");
        }
    }
}

