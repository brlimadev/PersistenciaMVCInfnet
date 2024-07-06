using System;
using SpotifyLike.Domain.Admin.Aggregates;
using SpotifyLike.Domain.Streaming.Aggregates;

namespace SpotifyLike.Repository.Repository
{
	public class UsuarioAdminRepository : RepositoryBase<UsuarioAdmin>
    {
		public UsuarioAdminRepository(SpotifyLikeContext context) : base(context)
        {
        }
    }
}

