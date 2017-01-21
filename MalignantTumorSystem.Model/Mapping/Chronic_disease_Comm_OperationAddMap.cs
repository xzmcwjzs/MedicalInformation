using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_OperationAddMap : EntityTypeConfiguration<Chronic_disease_Comm_OperationAdd>
    {
        public Chronic_disease_Comm_OperationAddMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.add_id)
                .HasMaxLength(50);

            this.Property(t => t.diag_bj)
                .HasMaxLength(50);

            this.Property(t => t.diag_mj)
                .HasMaxLength(50);

            this.Property(t => t.diag_name)
                .HasMaxLength(50);

            this.Property(t => t.numb)
                .HasMaxLength(50);

            this.Property(t => t.doctor)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_OperationAdd");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.add_id).HasColumnName("add_id");
            this.Property(t => t.data).HasColumnName("data");
            this.Property(t => t.diag_bj).HasColumnName("diag_bj");
            this.Property(t => t.diag_mj).HasColumnName("diag_mj");
            this.Property(t => t.diag_name).HasColumnName("diag_name");
            this.Property(t => t.numb).HasColumnName("numb");
            this.Property(t => t.doctor).HasColumnName("doctor");
        }
    }
}

