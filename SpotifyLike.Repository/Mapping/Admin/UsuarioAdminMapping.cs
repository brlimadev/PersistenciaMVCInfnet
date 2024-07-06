using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpotifyLike.Domain.Admin.Aggregates;
using SpotifyLike.Domain.Conta.Agreggates;

namespace SpotifyLike.Repository.Mapping.Admin
{
    public class UsuarioAdminMapping : IEntityTypeConfiguration<UsuarioAdmin>
    {
        public void Configure(EntityTypeBuilder<UsuarioAdmin> builder)
        {
            builder.ToTable(nameof(UsuarioAdmin));

            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Nome).IsRequired();
            builder.Property(x => x.Email).IsRequired();
            builder.Property(x => x.Password).IsRequired();
            builder.Property(x => x.Perfil).IsRequired();

        }
    }
}

