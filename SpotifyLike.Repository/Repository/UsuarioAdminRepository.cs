using System;
using SpotifyLike.Domain.Admin.Aggregates;
using SpotifyLike.Domain.Streaming.Aggregates;

namespace SpotifyLike.Repository.Repository
{
	public class UsuarioAdminRepository : RepositoryBase<UsuarioAdmin>
    {
		public UsuarioAdminRepository(SpotifyLikeAdminContext context) : base(context)
        {
        }

        public UsuarioAdmin GetUsuarioAdminByEmailAndPassword(string email, string password)
        {
            return this.Find(x => x.Email == email && x.Password == password).FirstOrDefault();
        }
    }


}

