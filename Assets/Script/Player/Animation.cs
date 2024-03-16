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
		if (Input.GetButtonUp("Jump") && isGrounded())
		{
			animator.SetTrigger("Jump");
		}
		else if (Input.GetKey(KeyCode.W))
		{
			if (Input.GetKey(KeyCode.D))
			{
				if (Input.GetKey(KeyCode.LeftShift))
				{
					animator.SetTrigger("RunForwardsRight");
				}
				else
				{
					animator.SetTrigger("ForwardsRight");
				}
			}
			else if (Input.GetKey(KeyCode.A))
			{
				if (Input.GetKey(KeyCode.LeftShift))
				{
					animator.SetTrigger("RunForwardsLeft");
				}
				else
				{
					animator.SetTrigger("ForwardsLeft");
				}
			}
			else
			{
				if (Input.GetKey(KeyCode.LeftShift))
				{
					animator.SetTrigger("RunForwards");
				}
				else
				{
					animator.SetTrigger("Forwards");
				}
			}
		}
		else if (Input.GetKey(KeyCode.S))
		{
			if (Input.GetKey(KeyCode.D))
			{
				if (Input.GetKey(KeyCode.LeftShift))
				{
					animator.SetTrigger("RunBackwardsRight");
				}
				else
				{
					animator.SetTrigger("BackwardsRight");
				}
			}
			else if (Input.GetKey(KeyCode.A))
			{
				if (Input.GetKey(KeyCode.LeftShift))
				{
					animator.SetTrigger("RunBackwardsLeft");
				}
				else
				{
					animator.SetTrigger("BackwardsLeft");
				}
			}
			else
			{
				if (Input.GetKey(KeyCode.LeftShift))
				{
					animator.SetTrigger("RunBackwards");
				}
				else
				{
					animator.SetTrigger("Backwards");
				}
			}
		}
		else if (Input.GetKey(KeyCode.D))
		{
			if (Input.GetKey(KeyCode.LeftShift))
			{
				animator.SetTrigger("RunRight");
			}
			else
			{
				animator.SetTrigger("Right");
			}
		}
		else if (Input.GetKey(KeyCode.A))
		{
			if (Input.GetKey(KeyCode.LeftShift))
			{
				animator.SetTrigger("RunLeft");
			}
			else
			{
				animator.SetTrigger("Left");
			}
		}
		else
		{
			animator.SetTrigger("Idle");
		}
	}

	private void ResetAllTriggers()
	{
		animator.ResetTrigger("Forwards");
		animator.ResetTrigger("Backwards");
		animator.ResetTrigger("Right");
		animator.ResetTrigger("Left");
		animator.ResetTrigger("ForwardsLeft");
		animator.ResetTrigger("ForwardsRight");
		animator.ResetTrigger("BackwardsLeft");
		animator.ResetTrigger("BackwardsRight");
		animator.ResetTrigger("RunForwards");
		animator.ResetTrigger("RunBackwards");
		animator.ResetTrigger("RunRight");
		animator.ResetTrigger("RunLeft");
		animator.ResetTrigger("RunForwardsLeft");
		animator.ResetTrigger("RunForwardsRight");
		animator.ResetTrigger("RunBackwardsLeft");
		animator.ResetTrigger("RunBackwardsRight");
		animator.ResetTrigger("Jump");
		animator.ResetTrigger("Idle");
	}

	bool isGrounded()
	{
		return Physics.Raycast(transform.position, -Vector3.up, 1.05f);
	}
}