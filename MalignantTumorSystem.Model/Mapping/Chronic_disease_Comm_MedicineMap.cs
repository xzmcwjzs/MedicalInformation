using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_MedicineMap : EntityTypeConfiguration<Chronic_disease_Comm_Medicine>
    {
        public Chronic_disease_Comm_MedicineMap()
        {
            // Primary Key
            this.HasKey(t => t.medicine_code);

            // Properties
            this.Property(t => t.medicine_code)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.medicine_name)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.common_name)
                .HasMaxLength(50);

            this.Property(t => t.specifications)
                .HasMaxLength(50);

            this.Property(t => t.dosage_forms)
                .HasMaxLength(50);

            this.Property(t => t.manufacturer)
                .HasMaxLength(50);

            this.Property(t => t.common_unit)
                .HasMaxLength(50);

            this.Property(t => t.common_price)
                .HasMaxLength(50);

            this.Property(t => t.min_unit)
                .HasMaxLength(50);

            this.Property(t => t.conversion_coefficient)
                .HasMaxLength(50);

            this.Property(t => t.statistical_classification)
                .HasMaxLength(50);

            this.Property(t => t.account_category)
                .HasMaxLength(50);

            this.Property(t => t.basic_drugs)
                .HasMaxLength(50);

            this.Property(t => t.basic_drugs_code)
                .HasMaxLength(50);

            this.Property(t => t.basic_drugs_name)
                .HasMaxLength(50);

            this.Property(t => t.source)
                .HasMaxLength(50);

            this.Property(t => t.split)
                .HasMaxLength(50);

            this.Property(t => t.medicine_classification)
                .HasMaxLength(50);

            this.Property(t => t.approval_number)
                .HasMaxLength(50);

            this.Property(t => t.skin_test)
                .HasMaxLength(50);

            this.Property(t => t.supervision_code)
                .HasMaxLength(50);

            this.Property(t => t.standard_code)
                .HasMaxLength(50);

            this.Property(t => t.value_classification)
                .HasMaxLength(50);

            this.Property(t => t.storage_instructions)
                .HasMaxLength(50);

            this.Property(t => t.take_instructions)
                .HasMaxLength(50);

            this.Property(t => t.remarks)
                .HasMaxLength(50);

            this.Property(t => t.state)
                .HasMaxLength(50);

            this.Property(t => t.skin_test_information)
                .HasMaxLength(50);

            this.Property(t => t.default_frequency)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_Medicine");
            this.Property(t => t.medicine_code).HasColumnName("medicine_code");
            this.Property(t => t.medicine_name).HasColumnName("medicine_name");
            this.Property(t => t.common_name).HasColumnName("common_name");
            this.Property(t => t.specifications).HasColumnName("specifications");
            this.Property(t => t.dosage_forms).HasColumnName("dosage_forms");
            this.Property(t => t.manufacturer).HasColumnName("manufacturer");
            this.Property(t => t.common_unit).HasColumnName("common_unit");
            this.Property(t => t.common_price).HasColumnName("common_price");
            this.Property(t => t.min_unit).HasColumnName("min_unit");
            this.Property(t => t.conversion_coefficient).HasColumnName("conversion_coefficient");
            this.Property(t => t.statistical_classification).HasColumnName("statistical_classification");
            this.Property(t => t.account_category).HasColumnName("account_category");
            this.Property(t => t.basic_drugs).HasColumnName("basic_drugs");
            this.Property(t => t.basic_drugs_code).HasColumnName("basic_drugs_code");
            this.Property(t => t.basic_drugs_name).HasColumnName("basic_drugs_name");
            this.Property(t => t.source).HasColumnName("source");
            this.Property(t => t.split).HasColumnName("split");
            this.Property(t => t.medicine_classification).HasColumnName("medicine_classification");
            this.Property(t => t.approval_number).HasColumnName("approval_number");
            this.Property(t => t.skin_test).HasColumnName("skin_test");
            this.Property(t => t.supervision_code).HasColumnName("supervision_code");
            this.Property(t => t.standard_code).HasColumnName("standard_code");
            this.Property(t => t.value_classification).HasColumnName("value_classification");
            this.Property(t => t.storage_instructions).HasColumnName("storage_instructions");
            this.Property(t => t.take_instructions).HasColumnName("take_instructions");
            this.Property(t => t.remarks).HasColumnName("remarks");
            this.Property(t => t.state).HasColumnName("state");
            this.Property(t => t.skin_test_information).HasColumnName("skin_test_information");
            this.Property(t => t.default_frequency).HasColumnName("default_frequency");
            this.Property(t => t.type).HasColumnName("type");
        }
    }
}

