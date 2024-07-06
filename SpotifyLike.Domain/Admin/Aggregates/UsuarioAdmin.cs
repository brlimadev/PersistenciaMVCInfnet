using System;
namespace SpotifyLike.Domain.Admin.Aggregates
{
	public class UsuarioAdmin
	{
		public Guid Id { get; set; }
		public String Nome { get; set; }
		public String Email { get; set; }
		public String Password { get; set; }
		public Perfil Perfil { get; set; }

	}
}

