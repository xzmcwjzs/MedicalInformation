using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_DiagnosticAddMap : EntityTypeConfiguration<Chronic_disease_Comm_DiagnosticAdd>
    {
        public Chronic_disease_Comm_DiagnosticAddMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.diag_id)
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.numb)
                .HasMaxLength(50);

            this.Property(t => t.hospital)
                .HasMaxLength(50);

            this.Property(t => t.doctor)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_DiagnosticAdd");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.diag_id).HasColumnName("diag_id");
            this.Property(t => t.data).HasColumnName("data");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.numb).HasColumnName("numb");
            this.Property(t => t.hospital).HasColumnName("hospital");
            this.Property(t => t.doctor).HasColumnName("doctor");
        }
    }
}

