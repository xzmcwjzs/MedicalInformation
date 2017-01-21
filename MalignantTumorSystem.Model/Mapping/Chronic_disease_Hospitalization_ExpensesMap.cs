using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Hospitalization_ExpensesMap :EntityTypeConfiguration<Chronic_disease_Hospitalization_Expenses>
    {
        public Chronic_disease_Hospitalization_ExpensesMap()
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
            this.Property(t => t.address)
                .HasMaxLength(50);
            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.hospitalization_number)
                .HasMaxLength(50);

            this.Property(t => t.bed_number)
                .HasMaxLength(50);

            this.Property(t => t.hospital)
                .HasMaxLength(50);

            this.Property(t => t.department)
                .HasMaxLength(50);

            this.Property(t => t.total)
                .HasMaxLength(50);

            this.Property(t => t.pay_way)
                .HasMaxLength(50);

            this.Property(t => t.self_cost)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            this.Property(t => t.sign)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Hospitalization_Expenses");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");

            this.Property(t => t.hospitalization_date).HasColumnName("hospitalization_date");
            this.Property(t => t.hospitalization_number).HasColumnName("hospitalization_number");
            this.Property(t => t.bed_number).HasColumnName("bed_number");
            this.Property(t => t.hospital).HasColumnName("hospital");
            this.Property(t => t.department).HasColumnName("department");
            this.Property(t => t.total).HasColumnName("total");
            this.Property(t => t.pay_way).HasColumnName("pay_way");
            this.Property(t => t.self_cost).HasColumnName("self_cost");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.sign).HasColumnName("sign");
        }
    }
}

