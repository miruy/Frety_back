package miruy.dev.chordric.repository;

import miruy.dev.chordric.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
