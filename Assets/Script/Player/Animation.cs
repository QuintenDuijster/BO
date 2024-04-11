using UnityEngine;

public class PlayerAnimationController : MonoBehaviour
{
	private Animator animator;

	private void Start()
	{
		animator = GetComponent<Animator>();
	}

	private void Update()
	{
		ResetAllTriggers();

		if (Input.GetKey(KeyCode.D))
		{
			animator.SetTrigger("RunForwardsRight");
		}
		else if (Input.GetKey(KeyCode.A))
		{
			animator.SetTrigger("RunForwardsLeft");
		}
		else
		{
			animator.SetTrigger("RunForwards");
		}
	}

	private void ResetAllTriggers()
	{
		animator.ResetTrigger("RunForwards");
		animator.ResetTrigger("RunForwardsLeft");
		animator.ResetTrigger("RunForwardsRight");
		animator.ResetTrigger("Idle");
	}

	bool isGrounded()
	{
		return Physics.Raycast(transform.position, -Vector3.up, 1.05f);
	}
}