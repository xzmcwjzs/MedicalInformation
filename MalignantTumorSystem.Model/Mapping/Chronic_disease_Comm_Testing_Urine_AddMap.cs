using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_Testing_Urine_AddMap : EntityTypeConfiguration<Chronic_disease_Comm_Testing_Urine_Add>
    {
        public Chronic_disease_Comm_Testing_Urine_AddMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.urine_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.result)
                .HasMaxLength(50);

            this.Property(t => t.unit)
                .HasMaxLength(50);

            this.Property(t => t.qujian)
                .HasMaxLength(50);

            this.Property(t => t.tishi)
                .HasMaxLength(50);

            this.Property(t => t.beizhu)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_Testing_Urine_Add");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.urine_id).HasColumnName("urine_id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.result).HasColumnName("result");
            this.Property(t => t.unit).HasColumnName("unit");
            this.Property(t => t.qujian).HasColumnName("qujian");
            this.Property(t => t.tishi).HasColumnName("tishi");
            this.Property(t => t.beizhu).HasColumnName("beizhu");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}

