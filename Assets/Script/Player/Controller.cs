using Unity.VisualScripting;
using UnityEditor;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class Controller : MonoBehaviour
{
	[SerializeField] private GameObject map;
    [SerializeField] private float rotationSpeed = 100f;
    [SerializeField] private float jumpForce = 5f;
    [SerializeField] private float runningSpeed = 10f;
    [SerializeField] private float walkingSpeed = 5f;
    [SerializeField] private GameObject gameController;

    [SerializeField] private float jumpGravity = 1f;
    [SerializeField] private float fallGravity = 1f;
    [SerializeField] private float jumpHeight = 1f;

    private bool jump = false;
    private float gravityScale;
	private Points points;
    private float moveSpeed = 0f;
    private Rigidbody rb;
    private float meterAlreadyTravelt = 0f;
    private float metersTravelt = 0;
    private float Horizontal;
    private float Vertical;

	public float groundCheckRadius = 0.1f;
    public LayerMask groundLayer;


	private void Start()
    {
        rb = GetComponent<Rigidbody>();
        points = gameController.GetComponent<Points>();
		Cursor.visible = false;
		Cursor.lockState = CursorLockMode.Locked;
	}

    private void Update()
    {
        Horizontal = Input.GetAxis("Horizontal");
        Vertical = Input.GetAxis("Vertical");

        RotateWithMouse();

        if (Input.GetButtonUp("Jump") && isGrounded())
        {
            jump = true;
        }
        if (rb.velocity.y > 0)
        {
            gravityScale = jumpGravity;
		}
		else if (rb.velocity.y < 0)
        {
			gravityScale = fallGravity;
		}

		bool isGrounded()
		{
			Collider[] colliders = Physics.OverlapSphere(transform.position, groundCheckRadius, groundLayer);

			return colliders.Length > 0 ? true : false;
		}

		metersTravelt = map.transform.position.z - meterAlreadyTravelt;


        if (metersTravelt > 0)
        {
			points.metersTravelt += map.transform.position.z - meterAlreadyTravelt;
		}


		meterAlreadyTravelt = map.transform.position.z;
	}

	private void FixedUpdate()
    {
        if (Input.GetKey(KeyCode.LeftShift))
        {
            moveSpeed = runningSpeed;
        }
        else
        {
            moveSpeed = walkingSpeed;
        }

        if (Horizontal != 0 && Vertical != 0)
        {
            moveSpeed = moveSpeed / 2;
        }

        Vector3 playerMovement = new Vector3(Horizontal, 0f, 0f).normalized * moveSpeed;
        rb.MovePosition(rb.position + transform.TransformDirection(playerMovement) * Time.fixedDeltaTime);

        Vector3 mapMovement = new Vector3(0f, 0f, Vertical).normalized * moveSpeed;
        map.transform.position += mapMovement * Time.fixedDeltaTime;

        if (jump)
        {
            jumpForce = Mathf.Sqrt(jumpHeight * -2 * (gravityScale * Physics.gravity.y));

            jump = false;
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
        rb.AddForce((gravityScale - 1) * Physics.gravity * rb.mass);
    }


	private void RotateWithMouse()
    {
        float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
        Quaternion deltaRotation = Quaternion.Euler(Vector3.up * mouseX);
        rb.MoveRotation(rb.rotation * deltaRotation);
    }
}

